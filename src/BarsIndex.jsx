/* eslint-disable react/prop-types */
export function BarsIndex(props) {
  return (
    <div>
      <div>
        {props.bars.map((bar) => (
          <div key={bar.id}>
            <h2>{bar.name}</h2>
            <img src={bar.imageUrl} alt="" />
            <h2>Specials: {bar.specials}</h2>
            <h2>Location: {bar.location}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
