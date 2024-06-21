## About
Hi, I am a Computer Science master's graduate, specializing in Artificial Intelligence from Freiburg University. My research revolves around robot manipulation, spanning policy learning methods to computer vision-based approaches. I recently completed my master's thesis, which has been accepted as a workshop paper at ICRA, under the guidance of Eugenio Chisari, Nick Heppert, and Prof. Abhinav Valada in the Robot Learning lab of Freiburg University. My thesis explores Computer Vision-based approaches to tackle 6-DoF grasp estimation of articulated objects. As a research assistant, I played a key role in generating datasets for various computer vision tasks, including object detection, pose estimation, depth estimation, and instance segmentation. 
  Before this, I mainly considered the theoretical aspects of Applied Mathematics. I was a research associate in the Mathematics for Uncertainty Quantification group at RWTH Aachen University, analyzing stochastic differential equations. I hold a master's degree in Scientific Computing from Heidelberg University, where I specialized in partial differential equation analysis, and a bachelor's degree in Applied Mathematics from Shiraz University: [CV](/asset/CV.pdf)

## Publication
### CenterArt: Joint Shape Reconstruction and 6-DoF Grasp Estimation of Articulated Objects (ICRA Workshop)
### [PDF](https://arxiv.org/abs/2404.14968), [Poster](https://docs.google.com/presentation/d/1QPcWd_ctpFwbuVFwgEyJNDXbCQiH0S6Sl7WAc27zNko/edit?usp=sharing), [Video](https://youtu.be/yhFBh0kZs5Y)
- Introduce the first approach capable of jointly reconstructing 3D shapes and predicting 6-DoF grasp poses for articulated objects
-  Generate a dataset of valid 6-DoF grasp poses for articulated objects
- Generate a dataset of photo-realistic kitchen scenes consisting of articulated objects

### Syn-Mediverse: A Multimodal Synthetic Dataset for Intelligent Scene Understanding of Healthcare Facilities (RA-L Journal)
### [PDF](https://arxiv.org/abs/2308.03193), [Website](http://syn-mediverse.cs.uni-freiburg.de/), [Video](https://www.youtube.com/watch?v=itAL_z_8kHY)
- The first hyper-realistic multimodal synthetic dataset of diverse healthcare facilities
- Provide more than 1.5M annotations spanning five different scene understanding tasks
- Provide an online evaluation benchmark along with the public dataset

  
## Selected Projects
### Policy Learning for Real-time Generative Grasp Synthesis [Slides](/asset/MasterProject.pdf)
- Design a realistic setup for mobile manipulation robot grasping in Isaac Sim
- Evaluate the performance of computer-vision-based and Policy-Learning-based approaches 
- Develop an interactive imitation learning model that outperforms existing models in this setup

### Robot Skill Adaptation via Soft Actor-Critic Gaussian Mixture Models [Poster](/asset/poster.pdf)
- Learn a dynamical model with Gaussian mixture models from a few demonstrations
- Refine the learned Gaussian mixture model with the Soft Actor-Critic model
- Apply Autoencoder to process the input images in latent space

### Optimal Importance Sampling Change of Measure for Large Sums of Random Variables [Slides](/asset/Rare_event.pdf), [Codes](/asset/WeibullRareEvent.m)
- Evaluate different approaches based on Importance Sampling to estimate rare-event probabilities
- Develop an alternative change of measure using Exponential twisting that leads to the same performance
- as the optimal change of measure but without its computational limitations

### Risk-Averse Optimal Control [Slides](/asset/Risk-averse%20Optimal%20Control.pdf)
- Analysis of the underlying SDE that results in optimal strategy for Merton's Portfolio Problem
- Study of different risk measures to consider the risk-averse version of the Portfolio problem
- Derive the solution of the SDE that describes the dynamics of risk-averse Merton's Portfolio problem as a closed-form mathematical Formula

### Analysis and Computation of Black-Scholes Equation with Local Volatility [PDF](/asset/MasterThesisHeidelberg.pdf)
- Mathematical Analysis of the Black-Scholes equation (second order PDE) for evaluating Option contracts
- Utilize the Lagrange finite element methods to numerically solve this time-dependent PDE with mesh refinement
- To cope with shortcompings of Black-Scholes equation in real world, the local volatility function was calibrated from observed option prices in the market 
- Test the obtained method on real world option prices

