const viewButton = document.querySelector('.view_btn');
const documentPreview = document.querySelector('.document_preview');
const iframe = document.querySelector('iframe');

viewButton.addEventListener('click', () => { documentPreview.style.display = 'block'; 
    iframe.src = 'documents/Luapula Province Climate change.docx';});