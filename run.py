import os

os.chdir('frontend')
os.system('yarn build')
os.chdir('../backend')
os.system('node index.js')