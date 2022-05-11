import os

# if node_modules doesn't exist, yarn install first
if os.path.isdir('frontend/dist') == True:
    os.chdir('backend')
    os.system('node index.js')