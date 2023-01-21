
import React from "react";
import { useStoreSelector } from "../hooks/use-store-selector";
import { FixedSizeGrid as Grid } from 'react-window'
import { MovieCard } from './movie-card'
import AutoSizer from 'react-virtualized-auto-sizer'

export const MoviesList = () => {

  const { movies } = useStoreSelector(state => state.movieStore)

  const getMovies = () => {
    return movies
  }

  const getWidth = () => {
    const mobileBreakpoint =  870;
    const narrowBreakpoint =  1170;
    const normalBreakpoint =  1475;
    const wideBreakpoint =  1720;
    const currWidth = window.innerWidth

    if(currWidth > wideBreakpoint) return 6
    if(currWidth > normalBreakpoint) return 5
    if(currWidth > narrowBreakpoint) return 4
    if(currWidth > mobileBreakpoint) return 3
    return 2
  }

  return (<AutoSizer>
    {({ height, width }) => (

      (<Grid
        columnCount={getWidth()}
        rowCount={Math.ceil(getMovies().length / getWidth())}
        columnWidth={300}
        rowHeight={400}
        width={width}
        height={height}
      >
        {({ columnIndex, rowIndex, style }) => {
          const movie = getMovies()[rowIndex * 3 + columnIndex];
          return (
            <div style={style}>
              <MovieCard movie={movie}/>
            </div>
          );
        }}
      </Grid>)
    )}
  </AutoSizer>
  );
};

