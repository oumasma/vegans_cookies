const titleRecipe = document.getElementById('title');
const stepsRecipe = document.getElementById('steps')

const steps = [
    [1, "cup", "white flour", "dry"],
    [0.5, "tsp", "baking soda", "wet"],
    [0.25, "tsp", "salt", "dry"],
    [0.25, "cup", "sugar", "dry"],
    [0.25, "cup", "brow sugar", "dry"],
    [0.25, "tbsp", "soy milk", "wet"],
    [0.25, "tbsp", "oil", "wet"],
    [0.25, "tsp", "pure vanilla extract", "dry"],
    ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
    [325, 10]
  ]


function Recipe (title, stepsArray) {
    let recipe = Object.create(Recipe.prototype)
    recipe.title = title
    recipe.steps = stepsArray
  
    return recipe;
  }
  
Recipe.prototype.cook = function () {
    console.log(`Titre de la recette : ${this.title}`)
    titleRecipe.innerHTML = this.title;
  


    let instructionArray = [];
  
    let getInstructions = function(ingredient){
      let length = ingredient.length ;
      if (length === 1) {
        instructionArray.push(ingredient[0])
      } else if (length === 2 
             && (ingredient[0]**2 + ingredient[1]**2 > 0)) {
        instructionArray.push(`Then, heat ${ingredient[0]} minutes in the oven at Y degrees.`)
      } else if (length === 4){
        if (ingredient[3]=== 'dry') {
          instructionArray.push(`Add ${ingredient[0]} ${ingredient[1]} of ${ingredient[2]} to the bowl.`)
        } else if (ingredient[3] === 'wet'){
          instructionArray.push(`Pour ${ingredient[0]} ${ingredient[1]} of ${ingredient[2]} to the bowl.`)
        }
      }
    }
  
    this.steps.forEach(function(e){
      getInstructions(e);
    })
  
    instructionArray.forEach(function(e){
      titleRecipe.innerHTML += `<li>${e}</li>`
    });  
  }
  
  let recipe = new Recipe('Best vegan choco cookie', steps);
  
  
  
  recipe.cook()