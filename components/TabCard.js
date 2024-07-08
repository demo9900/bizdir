import Link from "next/link";
const TabCard = ({ itemList }) => {
  return (
    <ul>
      {itemList.length > 0 ? (
        itemList?.slice(0, 6).map((item, index) => (
          <li key={index}>
            <div className="plac-hom-box">
              <div className="plac-hom-box-im">
                {item?.isClaimed?.length > 0 && (
                  <small
                    style={{
                      background:
                        item.isClaimed === "claimed" ? "#4caf50" : "#f44336",
                    }}
                    className="open-stat"
                  >
                    {item?.isClaimed}
                  </small>
                )}

                <img
                  src={item?.listing_image}
                  className="b-lazy b-loaded"
                  alt=""
                />
                <h4>{item?.listing_name}</h4>
              </div>
              <div className="rel-list-txt-box">
                <span className="dir-ho-cat">{item?.category}</span>
                <span className="rat-more-cta-ic">More details</span>
              </div>
              <Link href={`/all-listing/${item._id}`} className="fclick" />
            </div>
          </li>
        ))
      ) : (
        <div className="container ser-re-hu mx-auto my-10 text-center">
          Oops!!! No result(s) Found . Please try with other!!!
        </div>
      )}
    </ul>
  );
};

export default TabCard;
