# `React use-pagination-mui`
## Install

```sh
yarn add use-pagination-mui
```

## Usage

React use-pagination-mui is a hook that gives you functions to use with TablePagination Material-ui components. The page and perPage state is handled inside the hook. Here is some example code:

```jsx
import React from 'react'
import usePagination from 'use-pagination-mui'
import { TablePagination } from '@material-ui/core'

const App = () => {
                                                                           //initial perPage
  const { page, changePageEvent, perPage, changePerPageEvent, arrayPage } = usePagination(10)

  //example on how you can send page information to an api
  const callApi = () => {
      getList(url, { page, perPage }) //page starts with 1
      changePage(1) //changePage changes the current page directly
  }

  return (
    <TablePagination
      page={arrayPage} //arrayPage starts with 0
      rowsPerPage={perPage}
      onPageChange={changePageEvent} 
      onRowsPerPageChange={changePerPageEvent} 
    />     
  )
}
```