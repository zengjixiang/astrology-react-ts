import * as React from 'react';
import '../style.css';

export default function Login() {
  return (
  <div>
    <h3>登入系統</h3>

    <form>
			<div className="input-container">
	      <label>
					<p>帳號</p>
					<input type="text" name="username" required />
	      </label>
			</div>
			<div className="input-container">
	      <label>
					<p>密碼</p>        
	        <input type="password" name="password" required />
	      </label>
			</div>
      <div className="button-container">
        <button type="submit">登入</button>
      </div>
    </form>
		
  </div>);
}
