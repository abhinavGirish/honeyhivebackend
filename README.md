# honeyhivebackend

Setup instructions: 

1. in the current directory, run 'index.js'
2. in the 'flask-server' directory, run 'python app.py'
3. navigate to 'localhost:3000/' and enter in the appropriate information

achitecture diagram:

            --------            ---------              ----------  
            |       | <======= |         | =======>   |          |
            |  UI   |          |  server |            | pipeline |
user ====>  |       | ======>  |         | <=======   |  worker  |
             --------           ----------             ----------