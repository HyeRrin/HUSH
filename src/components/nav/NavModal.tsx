import React, { useEffect, useState } from 'react';
import SearchModal from './SearchModal';
import './NavModal.scss';

function NavModal({ closeModal }: any) {
  const [inputValue, setInputValue] = useState('');
  const [searchList, setSearchList] = useState<any>([]);
  const [isSearchModal, setIsSearchModal] = useState(false);

  const searchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsSearchModal(true);
  };
  console.log(searchList);
  useEffect(() => {
    if (inputValue.length > 1) {
      fetch(`http://192.168.87.223:3001/search?keyword=${inputValue}`)
        .then(response => response.json())
        .then(result => setSearchList(result));
    }
  }, [inputValue]);

  return (
    <div className="search-modal">
      <div className="search-main">
        <input
          type="text"
          placeholder="따끈따근 신제품이 궁금하다면?"
          value={inputValue}
          onChange={searchInput}
        />
        <a href="#!">
          <img
            className="search-btn"
            src="/images/Nav/search.png"
            alt="searchBtn"
          />
        </a>
        <button type="button" onClick={closeModal}>
          x
        </button>
      </div>
      {isSearchModal && <SearchModal searchList={searchList.message} />}
      <div className="search-footer">
        <div className="search-modal-left">
          <h2>인기 검색어</h2>
          <ul>
            <li>
              <a href="#!">#선물용</a>
            </li>
            <li>
              <a href="#!">#무설탕</a>
            </li>
            <li>
              <a href="#!">#할인</a>
            </li>
            <li>
              <a href="#!">#신메뉴</a>
            </li>
            <li>
              <a href="#!">#달달</a>
            </li>
            <li>
              <a href="#!">#갓석문</a>
            </li>
          </ul>
        </div>
        <div className="search-modal-right">
          <h3>최근 검색어</h3>
        </div>
      </div>
    </div>
  );
}

export default NavModal;
