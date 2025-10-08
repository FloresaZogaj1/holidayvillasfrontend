// src/pages/Privacy.jsx
import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl gradient-text mb-2">
          {t("privacy.title")}
        </h1>
        <p className="text-ink/70 mb-8">{t("privacy.updated")}</p>

        <div className="card lux-border p-6 space-y-6">
          {/* 1 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s1.title")}</h2>
            <p className="text-ink/80">{t("privacy.s1.body")}</p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s2.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("privacy.s2.li1")}</li>
              <li>{t("privacy.s2.li2")}</li>
              <li>{t("privacy.s2.li3")}</li>
              <li>{t("privacy.s2.li4")}</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s3.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("privacy.s3.li1")}</li>
              <li>{t("privacy.s3.li2")}</li>
              <li>{t("privacy.s3.li3")}</li>
              <li>{t("privacy.s3.li4")}</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s4.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("privacy.s4.li1")}</li>
              <li>{t("privacy.s4.li2")}</li>
              <li>{t("privacy.s4.li3")}</li>
              <li>{t("privacy.s4.li4")}</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s5.title")}</h2>
            <p className="text-ink/80">{t("privacy.s5.body")}</p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s6.title")}</h2>
            <p className="text-ink/80 mb-2">{t("privacy.s6.body")}</p>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("privacy.s6.li1")}</li>
              <li>{t("privacy.s6.li2")}</li>
              <li>{t("privacy.s6.li3")}</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s7.title")}</h2>
            <p className="text-ink/80">{t("privacy.s7.body")}</p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s8.title")}</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>{t("privacy.s8.li1")}</li>
              <li>{t("privacy.s8.li2")}</li>
              <li>{t("privacy.s8.li3")}</li>
              <li>{t("privacy.s8.li4")}</li>
              <li>{t("privacy.s8.li5")}</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s9.title")}</h2>
            <p className="text-ink/80">{t("privacy.s9.body")}</p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-semibold text-xl mb-2">{t("privacy.s10.title")}</h2>
            <p className="text-ink/80">{t("privacy.s10.body")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
