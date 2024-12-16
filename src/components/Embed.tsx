
export function Embed({url}: {url: string}) {
  return <iframe
    src={`${url}?embed=1&file=src%2FApp.tsx&hideExplorer=1&theme=dark&view=preview&hideNavigation=1`}
    style={
      {
        width: "100%",
        height: "600px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden"
      }}/>

}