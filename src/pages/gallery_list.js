import * as React from "react";
import { useState } from "react";
import { graphql } from "gatsby";
import AppHeader from "../components/header";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Icon } from "@iconify/react";
import openInNew from "@iconify/icons-ic/baseline-open-in-new";
import chevronLeft from "@iconify/icons-akar-icons/chevron-left";
import chevronRight from "@iconify/icons-akar-icons/chevron-right";
import moreHorizontal from "@iconify/icons-akar-icons/more-horizontal";
import Pagination from "rc-pagination";
import "../css/pagination.css";
import ImageWithPlaceholder from "../components/image-with-placeholder";
import useGoogleAdsConversion from "../hooks/useGoogleAdsConversion";

const GalleryList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  // Google Ads 轉換追蹤
  useGoogleAdsConversion();
  const filteredData = data.allGalleryJson.edges.filter((item) => {
    const { name, date, location } = item.node;
    const query = searchQuery.toLowerCase();
    return (
      name.toLowerCase().includes(query) ||
      date.toLowerCase().includes(query) ||
      location.toLowerCase().includes(query)
    );
  });
  const itemCount = filteredData.length;
  const perPage = 8;
  const paginatedData = filteredData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );
  const onPageChange = (page) => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 300)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    setCurrentPage(page);
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="bg-iosbgblue">
      <AppHeader
        title="iOS Club 活動相簿"
        description="社團活動相簿，記錄大家參與的各種活動與精彩時刻。"
      />
      <Navbar />
      <main
        id="main-content"
        className="container min-h-screen mx-auto bg-white px-4 pb-16 pt-32 font-serif md:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-black text-gray-900 md:text-5xl">
              活動相簿
            </h1>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              收藏 iOS Club 每一次相聚的精彩時刻
            </p>
          </header>

          <section aria-labelledby="gallery-search-label">
            <div className="mx-auto mb-4 max-w-2xl">
              <label
                id="gallery-search-label"
                htmlFor="gallery-search"
                className="mb-2 block font-bold text-gray-800"
              >
                搜尋活動
              </label>
              <input
                id="gallery-search"
                type="search"
                placeholder="輸入活動名稱、日期或地點"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-gray-400 px-5 py-3 text-base text-gray-900 transition-colors placeholder:text-gray-500 focus:border-btnbg focus:outline-none focus:ring-3 focus:ring-btnbg/25 motion-reduce:transition-none"
              />
            </div>
            <p
              className="mb-8 text-center text-sm text-gray-600"
              aria-live="polite"
            >
              {searchQuery
                ? `找到 ${itemCount} 個相簿`
                : `共 ${itemCount} 個相簿`}
            </p>
          </section>

          {itemCount > perPage && (
            <nav aria-label="上方相簿分頁" className="mb-8">
              <Pagination
                current={currentPage}
                onChange={onPageChange}
                total={itemCount}
                pageSize={perPage}
                showTitle={false}
                prevIcon={
                  <Icon icon={chevronLeft} width="24" aria-hidden="true" />
                }
                nextIcon={
                  <Icon icon={chevronRight} width="24" aria-hidden="true" />
                }
                jumpPrevIcon={
                  <Icon icon={moreHorizontal} width="24" aria-hidden="true" />
                }
                jumpNextIcon={
                  <Icon icon={moreHorizontal} width="24" aria-hidden="true" />
                }
              />
            </nav>
          )}

          {itemCount ? (
            <div className="grid gap-6 md:grid-cols-2">
              {paginatedData.map(({ node }) => (
                <GalleryItem key={node.id} node={node} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-300 bg-gray-50 px-6 py-16 text-center">
              <h2 className="text-xl font-bold text-gray-900">
                找不到相符的活動
              </h2>
              <p className="mt-2 text-gray-600">
                請嘗試其他活動名稱、日期或地點。
              </p>
            </div>
          )}

          {itemCount > perPage && (
            <nav aria-label="下方相簿分頁" className="mt-8">
              <Pagination
                current={currentPage}
                onChange={onPageChange}
                total={itemCount}
                pageSize={perPage}
                showTitle={false}
                prevIcon={
                  <Icon icon={chevronLeft} width="24" aria-hidden="true" />
                }
                nextIcon={
                  <Icon icon={chevronRight} width="24" aria-hidden="true" />
                }
                jumpPrevIcon={
                  <Icon icon={moreHorizontal} width="24" aria-hidden="true" />
                }
                jumpNextIcon={
                  <Icon icon={moreHorizontal} width="24" aria-hidden="true" />
                }
              />
            </nav>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const GalleryItem = ({ node }) => {
  const isExternal = Boolean(node.gdrive_url?.trim());
  const url = isExternal
    ? node.gdrive_url
    : "/gallery/" + node.date + " " + node.name;

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm transition duration-200 hover:border-ioscardblue hover:shadow-lg motion-reduce:transition-none">
      <ImageWithPlaceholder
        src={node.mainPhoto}
        alt={`${node.name}活動照片`}
        className="w-full"
        imgClassName="transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        aspectRatio="4/3"
      />
      <div className="flex flex-col gap-3 p-6">
        <h2 className="text-xl font-bold text-gray-900">{node.name}</h2>
        <dl className="space-y-2 text-gray-700">
          <div className="flex gap-2">
            <dt className="shrink-0 font-bold">日期</dt>
            <dd>{node.date}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="shrink-0 font-bold">地點</dt>
            <dd>{node.location}</dd>
          </div>
        </dl>
        <a
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="mt-2 inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full border border-btnbg bg-white px-5 py-2 font-bold text-btnbg transition-colors duration-200 hover:bg-btnbg hover:text-white focus:outline-none focus:ring-3 focus:ring-btnbg/30 motion-reduce:transition-none"
        >
          {isExternal && (
            <Icon icon={openInNew} width="18" height="18" aria-hidden="true" />
          )}
          <span>{isExternal ? "前往 Google Drive" : "查看相簿"}</span>
        </a>
      </div>
    </article>
  );
};

export const query = graphql`
  query {
    allGalleryJson(sort: { date: DESC }) {
      edges {
        node {
          id
          name
          photos
          date
          mainPhoto
          location
          gdrive_url
        }
      }
    }
  }
`;

export default GalleryList;
