import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRScanner = () => {
  const [data, setData] = useState("No result");

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-xl font-semibold mb-4">Scan QR Code</h2>
      
      <div className="w-80 h-80 mb-4 border rounded overflow-hidden">
        <QrReader
          constraints={{ facingMode: "environment" }} // use back camera
          scanDelay={300}
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }
            if (!!error) {
              // optional: console.log(error);
            }
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <p className="text-center">Result: <span className="font-bold">{data}</span></p>
    </div>
  );
};

export default QRScanner;
