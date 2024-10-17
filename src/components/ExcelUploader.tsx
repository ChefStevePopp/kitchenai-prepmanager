import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Upload } from 'lucide-react';

interface ExcelUploaderProps {
  onDataLoaded: (data: any) => void;
}

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onDataLoaded }) => {
  const [fileName, setFileName] = useState<string>('');

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target) {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: 'binary' });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
          onDataLoaded(data);
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 font-bold text-gray-700" htmlFor="excel-upload">
        Upload Excel File
      </label>
      <div className="flex items-center">
        <label className="flex items-center px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600">
          <Upload className="mr-2" size={20} />
          Choose File
          <input
            id="excel-upload"
            type="file"
            accept=".xlsx, .xls"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
        <span className="ml-2">{fileName || 'No file chosen'}</span>
      </div>
    </div>
  );
};

export default ExcelUploader;