type ststusTask = 'Выполнено' | 'В процессе' | 'Отменена'

interface TaskInterface {
  id: number
  title: string
  ststus: ststusTask
}
export default TaskInterface
