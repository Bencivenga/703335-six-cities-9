function Spinner(): JSX.Element {
  return (
    <div style={{
      height:  '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}
    >
      <img src="img/spinner.gif" alt="" />
    </div>
  );
}

export default Spinner;
