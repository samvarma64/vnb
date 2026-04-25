"use client";

import { useState, useRef } from "react";
import { Upload, X, Image as ImageIcon, Video } from "lucide-react";
import { uploadImageApi } from "@/lib/blogApi";
import Image from "next/image";

interface MediaUploadProps {
  currentMedia?: string;
  onMediaChange: (url: string) => void;
  acceptVideo?: boolean;
}

export default function MediaUpload({ 
  currentMedia, 
  onMediaChange, 
  acceptVideo = true 
}: MediaUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentMedia || "");
  const [error, setError] = useState("");
  const [mediaType, setMediaType] = useState<"image" | "video">("image");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Determine media type
    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');

    if (!isImage && !isVideo) {
      setError('Please select an image or video file');
      return;
    }

    if (!acceptVideo && isVideo) {
      setError('Video uploads are not supported for this field');
      return;
    }

    // Validate file size (50MB for videos, 5MB for images)
    const maxSize = isVideo ? 50 * 1024 * 1024 : 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setError(`File must be less than ${isVideo ? '50MB' : '5MB'}`);
      return;
    }

    setError("");
    setUploading(true);
    setMediaType(isVideo ? "video" : "image");

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
        onMediaChange(result.url);
        setPreview(result.url);
      } else {
        setError(result.error || 'Upload failed');
        setPreview(currentMedia || "");
      }
    } catch (err) {
      setError('Upload failed. Please try again.');
      setPreview(currentMedia || "");
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = () => {
    setPreview("");
    onMediaChange("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const isVideoUrl = (url: string) => {
    return url.match(/\.(mp4|webm|ogg|mov)$/i) || url.includes('video');
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Featured Media * {acceptVideo && <span className="text-gray-500 font-normal">(Image or Video)</span>}
      </label>

      {preview ? (
        <div className="relative group">
          <div className="relative w-full h-64 rounded-lg overflow-hidden border-2 border-gray-200">
            {isVideoUrl(preview) || mediaType === "video" ? (
              <video
                src={preview}
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                unoptimized={preview.startsWith('data:')}
              />
            )}
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors  opacity-0 group-hover:opacity-100"
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
          className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center  hover:border-vnb-blue hover:bg-gray-50 transition-all"
        >
          <div className="flex gap-4 mb-3">
            <ImageIcon className="w-12 h-12 text-gray-400" />
            {acceptVideo && <Video className="w-12 h-12 text-gray-400" />}
          </div>
          <p className="text-gray-600 font-medium mb-1">Click to upload media</p>
          <p className="text-sm text-gray-500">
            {acceptVideo 
              ? "Images: PNG, JPG, GIF, WEBP (5MB) • Videos: MP4, WEBM, MOV (50MB)"
              : "PNG, JPG, GIF, WEBP up to 5MB"
            }
          </p>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept={acceptVideo ? "image/*,video/*" : "image/*"}
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
          <span>Or enter media URL manually below</span>
        </div>
      )}

      <input
        type="url"
        value={preview}
        onChange={(e) => {
          const url = e.target.value;
          setPreview(url);
          onMediaChange(url);
          setMediaType(isVideoUrl(url) ? "video" : "image");
        }}
        placeholder="Or paste media URL here"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vnb-blue focus:border-transparent outline-none transition-all"
      />
    </div>
  );
}
