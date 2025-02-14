import React, { useCallback, useEffect, useRef, useState } from "react";

interface Child {
  query: string;
  getData: (query: string, pageNo: string) => Promise<unknown>;
  renderListItem: ({ title }: {
    title: string;
}, key: string | number, ref: React.RefObject<HTMLDivElement> | null) => JSX.Element
listData: any[]
}



function InfiniteScrollChild({ query, getData,  renderListItem, listData }: Child) {
  const pageNo = useRef(1);
  const [loading, setLoading] = useState(false);

  const renderList = useCallback(() => {
    return listData.map((item, index) => {
        return renderListItem(item, index, null)
    })
},[])

  useEffect(() => {
    setLoading(true);
    getData(query, pageNo.current + "").finally(() => setLoading(false));
  }, [query]);

  return <div>{renderList()}</div>;
}

export default InfiniteScrollChild;
