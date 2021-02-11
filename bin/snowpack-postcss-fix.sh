if ls src/styles/base.css
then
  mv src/styles/{base,index}.css .vscode/
else
  mv .vscode/{base,index}.css src/styles/
fi
