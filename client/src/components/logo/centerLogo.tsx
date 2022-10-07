import Logo from '../../assets/logo.png'
const CenterLogo = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '40%',
        left: '40%',
        width: '20%',
        height: '20%',
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
