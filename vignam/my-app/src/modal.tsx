import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddText: (text: string) => void;
  onAddPdf: (file: File) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onAddText, onAddPdf }) => {
  const [selectedOption, setSelectedOption] = useState<'text' | 'pdf' | null>(null);
  const [text, setText] = useState('');
  const [pdf, setPdf] = useState<File | null>(null);

  const handleAddContent = () => {
    if (selectedOption === 'text') {
      onAddText(text);
    } else if (selectedOption === 'pdf' && pdf) {
      onAddPdf(pdf);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">Add Content</h2>
        <div className="flex space-x-4 mb-4">
          <div
            onClick={() => setSelectedOption('text')}
            className={`border rounded-lg p-4 w-1/2 flex flex-col items-center cursor-pointer ${selectedOption === 'text' ? 'border-blue-500' : ''}`}
          >
            <img src="/assets/Group 40473.png" alt="Type content" className="mb-2" />
            <p className="text-center text-sm">Type your own personalized content</p>
          </div>
          <div
            onClick={() => setSelectedOption('pdf')}
            className={`border rounded-lg p-4 w-1/2 flex flex-col items-center cursor-pointer ${selectedOption === 'pdf' ? 'border-blue-500' : ''}`}
          >
            <img src="/assets/Group 40474.png" alt="Upload PDF" className="mb-2" />
            <p className="text-center text-sm">Upload a pdf of your content</p>
          </div>
        </div>
        {selectedOption === 'text' && (
          <textarea
            className="w-full border rounded-lg p-2 mb-4"
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here"
          />
        )}
        {selectedOption === 'pdf' && (
          <input
            type="file"
            accept="application/pdf"
            className="w-full border rounded-lg p-2 mb-4"
            onChange={(e) => setPdf(e.target.files?.[0] || null)}
          />
        )}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-transparent text-gray-600 py-2 px-4 rounded-lg border border-gray-400 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleAddContent}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            + Add Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
