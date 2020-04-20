import React from 'react'
import styles from './PostAdd.module.scss';
import { addPost } from '../../../redux/actions/postActions';
import { connect }  from 'react-redux';
import Loader from 'react-loader-spinner'

class PostAdd extends React.Component {
  state = {
    title: '',
    price: 0,
    img: '',
    number: '',
    content: '',
    titleError: '',
    priceError: '',
    numberError: '',
    imgError: '',
    contentError: '',
    addedSuccess: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value, 
      [`${e.target.name}Error`]: '',
    });
    switch(e.target.name){
      case 'title':
        this.checkTitle(e.target.value);
      break;
      case 'price':
        this.checkPrice(e.target.value);
      break;
      case 'content':
        this.checkContent(e.target.value);
      break;
      case 'number':
        this.checkNumber(e.target.value);
      break;
      default: 
      break;
    }
  }

  handleSubmit = e => {
    const { titleError, imgError, contentError, priceError, numberError, number, title, price, img, content } = this.state;
    e.preventDefault();
    this.checkTitle();
    this.checkPrice();
    this.checkContent();
    this.checkNumber();
    if(titleError === '' && imgError === '' && contentError === '' && priceError === '' && numberError === ''){
      const createdAt = new Date();
      this.props.addPost({ photo: img, text: content, price, title, author: this.props.email, created: createdAt, updated: createdAt, phone: number });
    }
  }

  checkTitle = (value = this.state.title) => {
    const regExp = /^[0-9\s\p{L} ,--.!:()]+$/u;
    const regExpChars = /[a-zA-Z]{5,}/;

    if(value.length < 5 || value.length > 30) {
      this.setState({
        titleError: 'Tytuł powinien zawierać od 5 do 30 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        titleError: 'Usuń znaki specjalne!'
      })
    }
    
    else if(!regExpChars.test(value)){
      this.setState({
        titleError: 'Tytuł musi zawierać co najmniej 5 liter!'
      })
    }
  }

  checkContent = (value = this.state.content) => {
    const regExp = /^[0-9\s\p{L} ,--.!:()]+$/u;

    if(value.length < 30 || value.length > 1000) {
      this.setState({
        contentError: 'Treść powinna zawierać od 30 do 1000 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        contentError: 'Usuń znaki specjalne!'
      })
    }
  }


  
  checkPrice = (value = this.state.price) => {
    const regExp = /^[0-9,.]+$/g;

    if(value < 0) {
      this.setState({
        priceError: 'Minimalna cena to 0!'
      })
    } 

    else if(value.length > 14 ) {
      this.setState({
        priceError: 'Max 14 znaków!'
      })
    }

    else if(!regExp.test(value)){
      this.setState({
        priceError: 'Cena może zawierać wyłacznie cyfry i przecinek!'
      })
    }
  }

  checkNumber = (value = this.state.number) => {
    const regExp = /^[0-9]+$/g;

    if (value.length < 6 || value.length > 14){
      this.setState({
        numberError: 'Numer poinien zawierać od 6 do 14 znaków!'
      })
    }

    else if(!regExp.test(value)){
      this.setState({
        numberError: 'Numer może składać się wyłącznie z cyfr!',
      })
    }
  }

  badImg = (e) => {
    e.preventDefault();
    this.setState({
      imgError: 'Podałeś zły link do zdjęcia!'
    })
  }

  postAdded = () => {
    this.setState({
      title: '',
      price: 0,
      number: null,
      img: '',
      content: '',
      titleError: '',
      numberError: '',
      priceError: '',
      imgError: '',
      contentError: '',
    })

    this.props.addedToFalse();
    this.setState({
      addedSuccess: 'Ogłoszenie dodane!',
    })

    setTimeout(() => {
      this.setState({
        addedSuccess: '',
      })
    }, 3000)
  }
 

  render() {
    const { title, price, img, content, number, titleError, priceError, imgError, contentError, addedSuccess, numberError } = this.state;
    if(this.props.loading) return ( 
      <div className={styles.center}>
        <Loader
          type="Grid"
          color="rgba(43, 45, 66, 1)"
          height={100}
          width={100}
        />
      </div>
    )
    
    else return (
      <div className={styles.root}>
        <form>
        {addedSuccess ? <div className={styles.success}>{addedSuccess}</div> : null}
          <div className={styles.input}>
            <input autoComplete="off" type="text" id='title' className={titleError ? styles.danger : null} maxLength='30' name='title' placeholder='Wpisz tytuł oferty ...'  value={title} onChange={this.handleChange} required/>
              <label htmlFor="title">Tytuł <p>Max znaków - {title.length}/30</p></label>
              {titleError !== '' ? <div className={styles.error}>{titleError}</div> : null}
          </div>
          <div className={styles.input}>
            <input autoComplete="off" type="number" min="0" className={priceError ? styles.danger : null} id='price' name='price' placeholder='Wpisz cenę ...' value={price} onChange={this.handleChange} required/>
            <label htmlFor="price">Cena <p>Max znaków - {price.length}/14</p></label>
            {priceError !== '' ? <div className={styles.error}>{priceError}</div> : null}
          </div>
          <div className={styles.input}>
            <input autoComplete="off" type="number" min="0" className={numberError ? styles.danger : null} id='number' name='number' placeholder='Wpisz swój numer ...' value={number} onChange={this.handleChange} required/>
            <label htmlFor="number">Numer telefonu <p>Max znaków - {number.length}/14</p></label>
            {numberError !== '' ? <div className={styles.error}>{numberError}</div> : null}
          </div>
          <div className={styles.input}>
            <input autoComplete="off" type="text" id='img' className={imgError ? styles.danger : null} name='img' placeholder='Wprowadź link do zdjęcia ...' value={img} onChange={this.handleChange} required/>
              <label htmlFor="img">Zdjęcie</label>
              { img && imgError === '' ? <div className={styles.img}><img onError={this.badImg} src={img} alt='Preview'/></div> : null}
              {imgError !== '' ? <div className={styles.error}>{imgError}</div> : null}
          </div>
          <div className={styles.input}>
            <textarea autoComplete="off" id='content' name='content'  className={contentError ? styles.danger : null} maxLength='1000' placeholder='Wpisz treść oferty ...' value={content} onChange={this.handleChange} required/>
            <label htmlFor="content" >Opis <p>Max znaków - {content.length}/1000</p></label>
            {contentError !== '' ? <div className={styles.error}>{contentError}</div> : null}
          </div>
          <input type="submit" onClick={this.handleSubmit}/>
          {this.props.error !== '' ? <div className={styles.error}>{this.props.error}</div> : null}
        </form>
      </div>
    )
  }

}

// PostAdd.propTypes = {
//   children: PropTypes.array,
// };

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  loading: state.post.isLoading,
  error: state.post.error,
})

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd)

