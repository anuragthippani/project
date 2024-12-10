import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import axios from 'axios';

export function VideoUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleSubmit = async () => {
    if (!file) return;

    setProcessing(true);
    setError(null);

    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await axios.post('/process-video', formData, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Create download link
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `reversed_${file.name}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      setError('An error occurred while processing the video. Please try again.');
      console.error('Error processing video:', err);
    } finally {
      setProcessing(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 py-8">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-600'}`}
      >
        <input {...getInputProps()} />
        <Upload className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
        {!file ? (
          <div>
            <p className="text-lg font-medium mb-2">
              Drag & drop your video here, or click to select
            </p>
            <p className="text-gray-500">
              Supports MP4, AVI, MOV, WMV, FLV, MKV
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <span className="text-lg font-medium">{file.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      {file && (
        <button
          onClick={handleSubmit}
          disabled={processing}
          className={`mt-6 w-full py-3 px-6 rounded-lg text-white font-medium
            ${processing
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
        >
          {processing ? 'Processing...' : 'Reverse Video'}
        </button>
      )}
    </section>
  );
}