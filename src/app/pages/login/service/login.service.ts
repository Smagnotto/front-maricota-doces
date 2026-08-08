import { Observable } from 'rxjs';
import { User } from '../model/User';

export abstract class LoginService {
  abstract user: Observable<User>;
  abstract get userValue(): User;
  abstract login(email: string, password: string): Promise<void>;
  abstract logout(): Promise<void>;
}
