import React, { useState, useEffect } from 'react';
import Modal from './modal';

const AddContentButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contents, setContents] = useState<{ type: 'text' | 'pdf', content: string }[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/contents')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched contents:', data);
        setContents(data);
      })
      .catch(error => console.error('Error fetching contents:', error));
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addTextContent = (text: string) => {
    const payload = { type: 'text', content: text };

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Text content added:', data);
      setContents([...contents, data]);
      closeModal(); // Closing the modal after adding content
    })
    .catch(error => {
      console.error('Error uploading text content:', error);
    });
  };

  const addPdfContent = (file: File) => {
    const formData = new FormData();
    formData.append('pdf', file);
    formData.append('type', 'pdf');

    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('PDF content added:', data);
      setContents([...contents, data]);
      closeModal(); // Close the modal after adding content
    })
    .catch(error => {
      console.error('Error uploading PDF:', error);
    });
  };

  return (
    <div className="absolute w-[323px] h-[195px] left-[716px] top-[497px] flex flex-col items-center p-0 gap-3">
      {contents.length === 0 ? (
        <>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src="/assets/Group 40325.png"  // Replace with your image URL
              alt="Your description"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="w-[323px] h-[25px] text-center text-[18px] leading-[25px] font-normal text-black">
            Content not added yet!
          </div>
        </>
      ) : (
        <div className="mt-4 w-full">
          {contents.map((content, index) => (
            <div key={index} className="mb-2">
              {content.type === 'text' ? (
                <p>{content.content}</p>
              ) : (
                <a href={`http://localhost:5000/uploads/${content.content}`} target="_blank" rel="noopener noreferrer">
                  View PDF {index + 1}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
      <button
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg"
        onClick={openModal}
      >
        Add Content
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} onAddText={addTextContent} onAddPdf={addPdfContent} />
    </div>
  );
};

export default AddContentButton;










