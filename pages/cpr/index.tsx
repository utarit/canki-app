import React from "react";
import { cprSteps } from "@/utils/cprSteps";
import Image from "next/image";

const CprPage = () => {
  return (
    <main className="flex flex-col items-center pb-4">
      <h1 className="text-xl font-bold m-4">Temel Yaşam Desteği Adımları</h1>
      {cprSteps.map((step, index) => (
        <React.Fragment key={step.image}>
          <div
            key={step.image}
            className="card w-96 bg-white shadow-md rounded-none md:rounded-lg"
          >
            <figure>
              <Image
                className="object-cover"
                src={`/gifs/${step.image}`}
                alt={step.description}
                width={384}
                height={200}
                loading="lazy"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <div className="badge badge-primary badge-lg">{index + 1}</div>
              </h2>
              <p>{step.description}</p>
            </div>
          </div>
          {index !== cprSteps.length - 1 &&
            (step.isMultiple ? (
              <div className="flex gap-32 h-64 py-4">
                <div className="border-red-700 border-dashed border-r-2 relative">
                  <p className="absolute -right-[22.5px] top-10 bg-base-100">
                    HAYIR
                  </p>
                </div>
                <div className="border-green-700 border-dashed border-l-2 h-32 relative">
                  <p className="absolute -left-5 top-10 bg-base-100">EVET</p>
                  <p className="absolute -left-[60px] -bottom-20 bg-green-700 text-base-100 p-2 rounded">
                    İkincil değerlendirme
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex gap-32 h-48 py-4">
                <div className="divider divider-horizontal">DEVAM</div>
              </div>
            ))}
          {}
        </React.Fragment>
      ))}
    </main>
  );
};

export default CprPage;
