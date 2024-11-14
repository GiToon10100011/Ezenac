import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import style from "@/styles/searchable-layout.module.css";

const SearchableLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    //이제 굳이 createSearchParams는 안써도되나? 원래도 그냥 선택사항이었음. url은 다양한 형태로 사용할 수 있기때문에 그냥 파라미터를 설정할 수 있는 방법 중 하나였다~
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <form className={style.searchbar_container} onSubmit={handleSubmit}>
        <input
          onChange={handleSearch}
          placeholder="검색어를 입력하세요"
          type="text"
        />
        <input type="submit" value="검색" />
      </form>
      {children}
    </div>
  );
};

export default SearchableLayout;
