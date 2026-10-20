function ImageGallery() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <img src="https://picsum.photos/id/1015/200/200" alt="Горы и река" width="200" />
      <img src="https://picsum.photos/id/1025/200/200" alt="Собака" width="200" />
      <img src="https://picsum.photos/id/1043/200/200" alt="Лес" width="200" />
    </div>
  );
}

export default ImageGallery;