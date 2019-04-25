const g = new Dracula.Graph

g.addEdge('userA', 'LearningLaravel')
g.addEdge('userB', 'LearningLaravel')

g.addEdge('userA', 'oscarMtzNarva')
g.addEdge('userB', 'oscarMtzNarva')

const layouter = new Dracula.Layout.Spring(g)

const renderer = new Dracula.Renderer.Raphael('#canvas', g)

renderer.draw()
