"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { uploadImageApi } from "@/lib/blogApi";
import Image from "next/image";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (url: string) => void;
}

export default function ImageUpload({ currentImage, onImageChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || "");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image must be less than 5MB');
      return;
    }

    setError("");
    setUploading(true);

    try {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Upload to server
      const result = await uploadImageApi(file);
      
      if (result.success && result.url) {
        onImageChange(result.url);
        setPreview(result.url);
      } else {
        setError(result.error || 'Upload failed');
        setPreview(currentImage || "");
      }
    } catch (err) {
      setError('Upload failed. Please try again.');
      setPreview(currentImage || "");
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview("");
    onImageChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Featured Image *
      </label>

      {preview ? (
        <div className="relative group">
          <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
              unoptimized={preview.startsWith('data:')}
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors cursor-pointer opacity-0 group-hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
          {uploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                <p>Uploading...</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-vnb-blue hover:bg-gray-50 transition-all"
        >
          <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
          <p className="text-gray-600 font-medium mb-1">Click to upload image</p>
          <p className="text-sm text-gray-500">PNG, JPG, GIF, WEBP up to 5MB</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {!preview && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Upload className="w-4 h-4" />
          <span>Or enter image URL manually below</span>
        </div>
      )}

      <input
        type="url"
        value={preview}
        onChange={(e) => {
          setPreview(e.target.value);
          onImageChange(e.target.value);
        }}
        placeholder="Or paste image URL here"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}
