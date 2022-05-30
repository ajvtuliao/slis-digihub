import os

os.chdir('frontend')
# if node_modules doesn't exist, yarn install first
if os.path.isdir('node_modules') == False:
    os.system('yarn install')

os.system('yarn build')

os.chdir('../backend')
# if node_modules doesn't exist, yarn install first
if os.path.isdir('node_modules') == False:
    os.system('yarn install')

os.system('npm run start')