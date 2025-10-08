// src/pages/Terms.jsx
import { useTranslation } from "react-i18next";

export default function Terms() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl gradient-text mb-2">
          {t("terms.title")}
        </h1>
        <p className="text-ink/70 mb-8">{t("terms.updated")}</p>

        <div className="card lux-border p-6 space-y-6">
          {/* 1 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s1.title")}</h2>
            <p className="text-ink/80">{t("terms.s1.body")}</p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s2.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("terms.s2.li1")}</li>
              <li>{t("terms.s2.li2")}</li>
              <li>{t("terms.s2.li3")}</li>
              <li>{t("terms.s2.li4")}</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s3.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("terms.s3.li1")}</li>
              <li>{t("terms.s3.li2")}</li>
              <li>{t("terms.s3.li3")}</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s4.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("terms.s4.li1")}</li>
              <li>{t("terms.s4.li2")}</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s5.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("terms.s5.li1")}</li>
              <li>{t("terms.s5.li2")}</li>
              <li>{t("terms.s5.li3")}</li>
            </ul>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s6.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("terms.s6.li1")}</li>
              <li>{t("terms.s6.li2")}</li>
              <li>{t("terms.s6.li3")}</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s7.title")}</h2>
            <p className="text-ink/80">{t("terms.s7.body")}</p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s8.title")}</h2>
            <p className="text-ink/80">{t("terms.s8.body")}</p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s9.title")}</h2>
            <p className="text-ink/80">{t("terms.s9.body")}</p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("terms.s10.title")}</h2>
            <p className="text-ink/80">{t("terms.s10.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
