const ClippingShape = () => (
    <svg width="0" height="0">
      <defs>
        {/* Clipping Mask using Provided Shape */}
        <clipPath id="customClip" clipPathUnits="userSpaceOnUse">
          <path d="M35.5 133.5L140.5 105L178 0.5L338.5 18C355.333 38.6667 346.8 89.5 178 127.5C9.2 165.5 93.6667 223 157 247L328.5 151L157 363.5L0.5 313L35.5 133.5Z" />
        </clipPath>
      </defs>
    </svg>
  );
  
  export default ClippingShape;
  