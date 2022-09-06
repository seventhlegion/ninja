import Container from "../Container/Container"

function Loading(): JSX.Element {
  return (
    <Container>
      <div className="flex flex-row justify-center items-center h-64 space-x-2">
        <div className="w-10 h-10 border-t-4 rounded-full animate-spin"></div>
        <h1 className="text-4xl">
          Loading...
        </h1>
      </div>
    </Container>
  )
}

export default Loading          