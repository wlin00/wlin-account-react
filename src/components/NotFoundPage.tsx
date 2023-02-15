import emptyPng from '../assets/img/empty.png'
export const NotFoundPage: React.FC = () => {
  return (
    <div relative min-h-500px>
      <div 
        absolute flex-c min-h-300px flex-col
        className="top-50% left-50% transform-translate--50%"
      >  
        <img src={emptyPng} inline-flex w-300px h-200px />
        <span mt-10px text-16px className="text-#333">当前路径不存在</span>
      </div>
    </div>
  )
}