// src/data/posts.js
import blog1Cover from "../assets/5.jpg";
import blog2Cover from "../assets/4.jpg";
import blog3Cover from "../assets/6.jpg";

export const posts = [
  {
    id: 1,
    title: "Udhëzuesi i pushimeve në bregdet",
    date: "05 Shtator 2025",
    cover: blog1Cover,
    excerpt:
      "Zbuloni plazhet më të bukura pranë Holiday Villas dhe këshilla praktike për një ditë perfekte nën diell.",
    content: [
      "Bregdeti ofron plazhe të qeta dhe me rërë të imët — ideal për familje.",
      "Merrni krem dielli, kapele, ujë të mjaftueshëm dhe një çadër plazhi për rehati maksimale.",
      "Koha më e mirë për plazh është paradite (deri në orën 11:00) ose pasdite (pas orës 16:00).",
    ],
  },
  {
    id: 2,
    title: "Gastronomia lokale që duhet provuar",
    date: "22 Gusht 2025",
    cover: blog2Cover,
    excerpt:
      "Nga frutat e detit te verërat artizanale – listë e shijeve që nuk duhet t’i humbisni.",
    content: [
      "Shijoni peshkun e freskët, sallatat sezonale dhe ëmbëlsirat artizanale.",
      "Provojeni menynë degustim për të marrë një panoramë të plotë të kuzhinës lokale.",
      "Përshtatje për dieta: vegjetariane, pa gluten — kërkoni paraprakisht te stafi.",
    ],
  },
  {
    id: 3,
    title: "Aktivitetet më të mira për familje",
    date: "10 Korrik 2025",
    cover: blog3Cover,
    excerpt:
      "Ide për aventura të sigurta dhe argëtuese për të gjithë moshat rreth resortit tonë.",
    content: [
      "Hiking i lehtë rreth liqenit, biçikleta dhe piknik në livadhe.",
      "Ture fotografike në perëndim të diellit — me guida lokale.",
      "Zona ‘kids-friendly’ me lojëra dhe aktivitete krijuese.",
    ],
  },
];

export const getPostById = (id) => posts.find((p) => p.id === Number(id));
