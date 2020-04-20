import React from 'react'
import styles from './PostAdd.module.scss';
import { addPost } from '../../../redux/actions/postActions';
import { connect }  from 'react-redux';
import Loader from 'react-loader-spinner'

class PostAdd extends React.Component {
  state = {
    title: '',
    price: 0,
    photo: '',
    phone: '',
    text: '',
    titleError: '',
    priceError: '',
    phoneError: '',
    photoError: '',
    textError: '',
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
      case 'text':
        this.checkText(e.target.value);
      break;
      case 'phone':
        this.checkPhone(e.target.value);
      break;
      default: 
      break;
    }
  }

  handleSubmit = e => {
    const { titleError, photoError, textError, priceError, phoneError, phone, title, price, photo, text } = this.state;
    e.preventDefault();
    this.checkTitle();
    this.checkPrice();
    this.checkText();
    this.checkPhone();
    if(titleError === '' && photoError === '' && textError === '' && priceError === '' && phoneError === ''){
      const created = new Date();
      this.props.addPost({ photo, text, price, title, author: this.props.email, phone });
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

  checkText = (value = this.state.text) => {
    const regExp = /^[0-9\s\p{L} ,--.!:()]+$/u;

    if(value.length < 30 || value.length > 1000) {
      this.setState({
        textError: 'Treść powinna zawierać od 30 do 1000 znaków!'
      })
    } 

    else if(!regExp.test(value)){
      this.setState({
        textError: 'Usuń znaki specjalne!'
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

  checkPhone = (value = this.state.phone) => {
    const regExp = /^[0-9]+$/g;

    if (value.length < 6 || value.length > 14){
      this.setState({
        phoneError: 'Numer poinien zawierać od 6 do 14 znaków!'
      })
    }

    else if(!regExp.test(value)){
      this.setState({
        phoneError: 'Numer może składać się wyłącznie z cyfr!',
      })
    }
  }

  badPhoto = (e) => {
    e.preventDefault();
    this.setState({
      photoError: 'Podałeś zły link do zdjęcia!'
    })
  }

  postAdded = () => {
    this.setState({
      title: '',
      price: 0,
      phone: null,
      photo: '',
      text: '',
      titleError: '',
      phoneError: '',
      priceError: '',
      photoError: '',
      textError: '',
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
    const { title, price, photo, text, phone, titleError, priceError, photoError, textError, addedSuccess, phoneError } = this.state;
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
            <input autoComplete="off" type="phone" min="0" className={priceError ? styles.danger : null} id='price' name='price' placeholder='Wpisz cenę ...' value={price} onChange={this.handleChange} required/>
            <label htmlFor="price">Cena <p>Max znaków - {price.length}/14</p></label>
            {priceError !== '' ? <div className={styles.error}>{priceError}</div> : null}
          </div>
          <div className={styles.input}>
            <input autoComplete="off" type="phone" min="0" className={phoneError ? styles.danger : null} id='phone' name='phone' placeholder='Wpisz swój numer ...' value={phone} onChange={this.handleChange} required/>
            <label htmlFor="phone">Numer telefonu <p>Max znaków - {phone.length}/14</p></label>
            {phoneError !== '' ? <div className={styles.error}>{phoneError}</div> : null}
          </div>
          <div className={styles.input}>
            <input autoComplete="off" type="text" id='photo' className={photoError ? styles.danger : null} name='photo' placeholder='Wprowadź link do zdjęcia ...' value={photo} onChange={this.handleChange} required/>
              <label htmlFor="photo">Zdjęcie</label>
              { photo && photoError === '' ? <div className={styles.photo}><photo onError={this.badPhoto} src={photo} alt='Preview'/></div> : null}
              {photoError !== '' ? <div className={styles.error}>{photoError}</div> : null}
          </div>
          <div className={styles.input}>
            <textarea autoComplete="off" id='text' name='text'  className={textError ? styles.danger : null} maxLength='1000' placeholder='Wpisz treść oferty ...' value={text} onChange={this.handleChange} required/>
            <label htmlFor="text" >Opis <p>Max znaków - {text.length}/1000</p></label>
            {textError !== '' ? <div className={styles.error}>{textError}</div> : null}
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

