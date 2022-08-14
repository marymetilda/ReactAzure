import React from 'react'


function ListItems(props) {
  return (
    <div className="footerItemSection">
      {(props.footItem).map((footerItems) =>{
        return(
            <div className="FooterItems"><a href={footerItems.url}>{footerItems.item}</a></div>
        )
      })}
    </div>
  )
}

export default ListItems
