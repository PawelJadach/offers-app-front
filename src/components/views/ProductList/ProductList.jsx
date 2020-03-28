import React from 'react'
import PropTypes from 'prop-types'

const ProductList = ({ children }) => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cumque quos, dolorum fuga recusandae asperiores rerum aliquid repellendus praesentium assumenda explicabo ad est, nostrum dolore reiciendis ea enim. Consectetur suscipit voluptates, vitae sunt laborum, assumenda cum mollitia illum ullam libero cumque quas eos quisquam ea veritatis quo asperiores modi inventore aliquam eaque voluptatem facilis impedit soluta sapiente? Quis aperiam ipsam quaerat autem error ad perspiciatis, doloribus amet molestiae. Eligendi corrupti obcaecati, reprehenderit unde aliquid officia facilis perspiciatis in! Voluptatibus ratione magni, sint dignissimos tenetur iusto illum aut explicabo atque nihil commodi veritatis ut voluptas temporibus sunt ab possimus labore? Corrupti.</h1>
    </div>
  )
}

ProductList.propTypes = {
  children: PropTypes.array,
};

export default ProductList;
