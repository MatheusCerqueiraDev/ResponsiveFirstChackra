const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "Lawyer Gothic";
        src: url("/fonts/LawerGothic/LawyerGothic-Bold.ttf");
        font-weight: normal, bold, italic;
        font-style: normal;
      }
    `}
  </style>
);

export default FontFace;
