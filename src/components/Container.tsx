type ContainerProps = {
    styles: React.CSSProperties
  }
  
  export const Container = (props: ContainerProps) => {
    console.log(props.styles)
    return <div style={props.styles}> Hello!</div>
  }