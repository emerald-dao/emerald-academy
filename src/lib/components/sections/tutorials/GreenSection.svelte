<script>
   
    export let header;
    export let number;
    export let id;
    </script>
    
    <div class="tutorial" id={id}>
      <div class="column tut1">
        <div class="heading-box">
          <h2 class="header">{header}</h2>
          <div class="number"><span>0{number}</span></div>
        </div>
        <div class="instructions">
          <slot/>          
        </div>
      </div>
    </div>
    
    <style>

.tutorial{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      position: relative;
      width: 100vw;
      top: 0;
      padding: 4rem 0rem;
      background: var(--tut-bg2);
    }
      .column {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 40%;
      } 
      
      .heading-box {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 6rem;
        border: 4px solid var(--primary) ;
        border-radius: 20px;
        box-shadow: 1px 3px 8px black;
      }

      .number {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -30px;
        left: 40px;
        width: 100px;
        height: 60px;
        font-size: 3rem;
        background: var(--tut-bg3);
        color: var(--text);
      }      

      .header {
        margin: 0;
        font-weight: normal;
        font-size: 2.5rem;
      }

      .instructions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem 2rem;
      }
    
    </style>