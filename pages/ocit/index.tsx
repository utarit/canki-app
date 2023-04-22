import React from "react";
import Image from "next/image";
import Head from "next/head";

const OcitPage = () => {
  return (
    <main className="flex justify-center">
      <Head>
        <title>OCİT Kimdir</title>
        <meta
          name="description"
          content="OCİT nedir, kimdir tanımak isterseniz bizi takipte kalın."
        />
      </Head>
      <article className="container prose p-4">
        <h1>OCİT Kimdir?</h1>
        <Image alt="karavan" src="karavan.png" width={600} height={400} />
        <p>
          ODTÜ Can kurtarma ve İlk yardım Topluluğu (OCİT) 1992 yılında, Havuz
          Müdürlüğü’nün denetiminde çalışmak üzere kurulmuştur. Türkiye’de ilk
          yardımcıların ve sertifikalı can kurtaranların aynı çatı altında
          toplanabildiği bir öğrenci topluluğudur. Kurucu üyeleri Tolga Cebe,
          Tolga Akış, Funda Aydın, Hakan Bakır, Ersin İpek’tir.
        </p>
        <p>
          Her yıl birçok kişinin kaza sonrası yapılan eksik ve yanlış müdahale
          sonrasında hayatını kaybettiği ülkemizde, insan hayatına verilen
          önemin artmasını sağlamak, OCİT’in temel hedefidir. Bu amacını
          gerçekleştirmek için düzenlediği ilk yardım ve can kurtaranlık
          kursları ve etkinlikler aracılığıyla, insanlara tehlikelere karşı
          korunmayı, soğukkanlı ve hazırlıklı olmayı, önlem almayı ve tehlike
          anında nasıl davranılması gerektiğini öğretir.
        </p>
        <p>
          OCİT, tüm etkinliklerini takım anlayışı içerisinde, amatör bir ruhla
          ve bilimsel yaklaşımla, sıkı bir örgütlülük yapısı ve sosyal bütünlük
          içinde, demokratik bir anlayışla gerçekleştirir. Bir öğrenci topluluğu
          olarak profesyonel yaşantının indirgenmiş bir modeli olan OCİT içinde
          üyeler; kişiliklerin şekillenmesini, deneyim kazanmayı, ego kontrolünü
          öğrenmeyi, kısaca toplum içinde birey olmayı etüt eder.
        </p>

        <h2>Bir OCİT üyesinin evrimi</h2>
        <ul className="steps steps-vertical">
          <li className="step step-secondary">
            Temel ilk yardım derslerini (TYD) aldı.
          </li>
          <li className="step step-secondary">
            Düzenli toplantılara gelerek topluluk üyesi oldu.
          </li>
          <li className="step step-secondary">
            Havuz antremanları ile cankurtaranlık dersleri almaya başladı.
          </li>
          <li className="step step-secondary">
            Kızılay sertifikasını aldı ve artık o uluslararası bir ilk yardımcı.
          </li>
          <li className="step step-secondary">
            İleri ilk yardım dersleri (İYD) ile zor koşullarda ilk yardım
            yapmayı öğrendi.
          </li>
          <li className="step step-secondary">
            Artık öğrenci değil öğretmen oldu. TYD&apos;de eğitmenlik yapmaya
            başladı.
          </li>
          <li className="step step-secondary">
            Organizasyon, iletişim ve yönetim becerileri yüksek bir birey ve üye
            oldu.
          </li>
          <li className="step step-secondary">
            Kültür, sanat, gastronomi, maraton gibi birçok etkinlikle kendini
            geliştirdi.
          </li>
          <li className="step step-secondary">
            Ayrılma zamanı geldiğinde unutulmayacak bir OCİT Mezunu oldu.
          </li>
          <li className="step step-secondary">
            Hala katılmaya devam ediyor, okul bitse de OCİT bitmez.
          </li>
        </ul>
      </article>
    </main>
  );
};

export default OcitPage;
