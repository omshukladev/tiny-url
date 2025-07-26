 import QRCode from "react-qr-code"; //to generate the QR code

const OutputContainer = ({ shortUrl }) => {
  if (!shortUrl) return null;

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-primary">Your Short URL:</p>
      <a href={shortUrl} target="_blank" className="link link-primary">
        {shortUrl}
      </a>

      <div className="flex justify-center pt-4">
        <QRCode value={shortUrl} />
      </div>
    </div>
  );
};

export default OutputContainer;
