import { h } from 'preact';
import { resolveUrl } from '../util/svg';

export function IroHandle(props: any) {
  const radius = props.r;
  const url = props.url;

  return (
    <svg className="iro__handle" x={ props.x } y={ props.y } style={{ overflow: 'visible' }}>
      {url && (
        <use xlinkHref={resolveUrl(url)} { ...props.origin }/>
      )}
      {!url && (
        <circle 
          className="iro__handle__inner"
          r={ radius }
          fill="none"
          stroke-width={ 2 }
          stroke="#000"
        />
      )}
      {!url && (
        <circle 
          className="iro__handle__outer" 
          r={ radius - 2 }
          fill="none"
          stroke-width={ 2 }
          stroke="#fff"
        />
      )}
    </svg>
  );
}

IroHandle.defaultProps = {
  x: 0,
  y: 0,
  r: 8,
  url: null,
  origin: {x: 0, y: 0}
};