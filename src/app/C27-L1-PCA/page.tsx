
"use client";
import jsPDF from "jspdf";
import Image from "next/image";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const Page = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      comicStripText: "",
    },
  });

const onsubmit = (data: { comicStripText: string }) => {
    const doc = new jsPDF({
      unit: "pt",
      format: "a4",
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    const margin = 40;
    let y = margin;

    // Centered Title
    doc.setFontSize(20);
    const title = "Comic Strip";
    const titleWidth = doc.getTextWidth(title);
    doc.text(title, (pageWidth - titleWidth) / 2, y);
    y += 30;

    // Comic Image
    const imagePath = "/C27Images/ComicStrip.jpg"; // must be in /public folder

    // Convert to base64 image
   const img = document.createElement("img");
    img.src = imagePath;

    img.onload = () => {
      const imgWidth = 200;
      const imgHeight = 100;
      const x = (pageWidth - imgWidth) / 2;
      doc.addImage(img, "JPEG", x, y, imgWidth, imgHeight);
      y += imgHeight + 30;

      // Now add user input
      const text = data.comicStripText;
      const lineHeight = 20;
      const fontSize = 12;
      doc.setFontSize(fontSize);

      const lines = doc.splitTextToSize(text, pageWidth - margin * 2);

      lines.forEach((line: string) => {
        if (y + lineHeight > pageHeight - margin) {
          doc.addPage();
          y = margin;

          // Re-add title and image to new page
          doc.setFontSize(20);
          doc.text(title, (pageWidth - titleWidth) / 2, y);
          y += 30;
          doc.addImage(img, "JPEG", x, y, imgWidth, imgHeight);
          y += imgHeight + 30;

          doc.setFontSize(fontSize);
        }
        doc.text(line, margin, y);
        y += lineHeight;
      });

      doc.save("comic-strip.pdf");
    };

    // img.onerror = () => {
    //   alert("Failed to load comic strip image.");
    // };
  };


  return (
    <div className="min-h-screen flex flex-col gap-5 justify-start items-center p-5 bg-[#F8FAFC]">
      <h4 className="text-2xl text-black font-medium">Create a Comic Strip</h4>

      <div className="min-h-[300px] border p-2 flex justify-center items-center flex-col gap-2">
        <p className="text-center w-[800px] text-xl text-black">
          Write the dialogue for the following comic strip! Be clear, concise,
          courteous, and complete. Have fun with it
        </p>
        <Image
          src="/C27Images/ComicStrip.jpg"
          width={300}
          height={100}
          alt="ComicStrip image"
        />
        <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-3 items-center">
          <Controller
            name="comicStripText"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                placeholder="Write Here..."
                className="text-lg text-black text-center min-h-[150px] min-w-[500px] border  border-gray-400 rounded-lg "
              />
            )}
          />
          <button className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white py-2 px-8 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
