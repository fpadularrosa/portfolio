import Image from 'next/image'
const MyImage = ({src, width, heigth}) => {
    return (
    <div>
      <Image
      src={src}
      alt="ref-prog"
      width={width}
      height={heigth}
      />
    </div>
  )
}
export default MyImage;