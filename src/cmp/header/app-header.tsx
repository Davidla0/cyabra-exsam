import React from "react"
import imdb from '../../assets/img/svg/imdb-logo.png'

import { AppFilter } from "./app-filter"

export const AppHeader = () => {

    return <div className="app-header-inner">
        <div className="logo"><img src={imdb} alt="" /></div>

        <div className="filter-section">
            <AppFilter />
        </div>
        <div></div>
    </div>
}