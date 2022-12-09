import React from 'react';

interface SearchItemType {
  id: number | null;
  name: string | null;
}

function SearchModal({ searchList }: any) {
  return (
    <div className="search-list">
      {searchList ? (
        searchList.map((item: SearchItemType) => {
          return <p key={item.id}>{item.name}</p>;
        })
      ) : (
        <p> </p>
      )}
    </div>
  );
}

export default SearchModal;
