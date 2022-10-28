import Logo from '../../assets/logo.png'
const CenterLogo = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '30%',
        right: '0',
        width: '40%',
        height: '40%',
        backgroundImage: `url(${Logo})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -1,
        opacity: 0.6
      }}
    />
  )
}

export default CenterLogo
